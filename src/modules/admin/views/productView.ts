import { getProductID } from "@/modules/products/actions";
import { useQuery } from "@tanstack/vue-query";
import { defineComponent, watch, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { useFieldArray, useForm } from "vee-validate";
import * as yup from "yup";
import customInput from "@/modules/common/components/customInput.vue";
import CustomTextArea from "@/modules/common/components/customTextArea.vue";

const validationSchema = yup.object({
  title: yup.string().required("Title is required").min(3, "Title must be at least 3 characters long"),
  slug: yup.string().required("Slug is required").min(5, "Slug must be at least 5 characters long"),
  description: yup.string().required("Description is required").min(10, "Description must be at least 10 characters long"),
  price: yup.number().required("Price is required").positive("Price must be positive"),
  stock: yup.number().required("Stock is required").positive("Stock must be positive"),
  genre: yup.string().required("Genre is required")
});

export default defineComponent({
  components: {
    customInput,
    CustomTextArea,
  },
  props: {
    productId: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    const router = useRouter();

    const { data: product, isError, isLoading } = useQuery({
      queryKey: ['product', props.productId],
      queryFn: () => getProductID(props.productId),
      retry: false,
    })

    const { values, defineField, errors, handleSubmit, resetForm, meta } = useForm({ validationSchema, initialValues: product.value });
    const [title, titleAttrs] = defineField('title');
    const [slug, slugAttrs] = defineField('slug');
    const [description, descriptionAttrs] = defineField('description');
    const [price, priceAttrs] = defineField('price');
    const [stock, stockAttrs] = defineField('stock');
    const [genre, genreAttrs] = defineField('genre');

    const { fields: images } = useFieldArray<string>('images');

    const { fields: sizes, remove: removeSize, push: pushSize } = useFieldArray<string>('sizes');

    const toggleSizes = (size: string) => {
      const currentSizes = sizes.value.map((s) => s.value);
      const hasSizes = currentSizes.includes(size);
      if (hasSizes) {
        removeSize(currentSizes.indexOf(size));
      } else {
        pushSize(size);
      }
    }

    const onSubmit = handleSubmit((value) => {
      console.log("Form submitted with values:", value);
    });

    watchEffect(() => {
      if (isError.value && !isLoading.value) {
        router.replace('/admin/products');
        return;
      }
    });

    watch(product, () => {
      if (!product) return;
      resetForm({ values: product.value });
    },
      {
        deep: true,
        immediate: true,
      });

    return {
      values,
      errors,
      title, titleAttrs,
      slug, slugAttrs,
      description, descriptionAttrs,
      price, priceAttrs,
      stock, stockAttrs,
      images,
      genre, genreAttrs,
      allSizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      onSubmit,
      toggleSizes,
      meta,

      hasSize:(size:string)=>{
        const currentSizes = sizes.value.map((s) => s.value);
        return currentSizes.includes(size);
      }
    };
  },
})
