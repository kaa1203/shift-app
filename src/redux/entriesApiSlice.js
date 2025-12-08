import { apiSlice } from "./apiSlice";

const entriesSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRecentEntries: builder.query({
      query: () => "entries/",
      providesTags: (results, error, arg) => ["Entries"],
      transformResponse: (res) => {
        return { result: res };
      },
    }),
  }),
});

export const { useGetRecentEntriesQuery } = entriesSlice;
