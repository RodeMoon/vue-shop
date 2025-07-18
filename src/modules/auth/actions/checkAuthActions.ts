import { tesloApi } from "@/api/tesloAPI";
import type { AuthResponse, User } from "../interfaces";
import { isAxiosError } from "axios";

interface CheckError {
  ok: false;
}

interface CheckSuccess {
  ok: true;
  user: User;
  token: string;
}

export const checkAuthActions = async (): Promise<CheckError | CheckSuccess> => {
  try {
    const localToken = localStorage.getItem('token');
    if (localToken && localToken.length < 10) {
      return { ok: false, };
    }
    const { data } = await tesloApi.get<AuthResponse>('/auth/check-status');
    return {
      ok: true,
      user: data.user,
      token: data.token,
    };
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 401) {
      return { ok: false };
    }
    throw new Error('An unexpected error occurred while checking authentication status.');
  }
}
