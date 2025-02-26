import { JeJuData } from "@/types/type";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const clientApi = axios.create({
  baseURL: "https://api.visitjeju.net/vsjApi/contents/searchList",
  params: {
    apiKey: "8mbfp3rur332azyf",
    locale: "kr",
  },
  headers: {
    "Content-Type": "application/json",
  },
});

export const getJeJuData = async (page: number, category: string) => {
  try {
    const response = await clientApi.get("", {
      params: {
        page: page,
        category: category,
      },
    });
    if (response.status === 200) {
      return response.data.items;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getDetailData = async (contentId: string) => {
  try {
    const response = await clientApi.get("", {
      params: {
        cid: contentId,
      },
    });
    if (response.status === 200) {
      return response.data.items;
    }
  } catch (error) {
    console.log(error);
  }
};

export const useGetData = (category: string) => {
  return useInfiniteQuery({
    queryKey: ["jeju"],
    queryFn: ({ pageParam = 1 }) => getJeJuData(pageParam, category),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      return lastPage && lastPage.length === 100
        ? lastPageParam + 1
        : undefined;
    },
  });
};

export const useGetDetailData = (contentId: string) => {
  const queryFn = () => getDetailData(contentId);
  return useQuery<JeJuData[]>({
    queryKey: ["detail", contentId],
    queryFn,
  });
};
