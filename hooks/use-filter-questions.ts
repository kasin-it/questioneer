import { create } from "zustand"

export type DifficultyType = "easy" | "medium" | "hard" | ""
export type OrderByType = "difficulty" | "title" | "createdAt" | ""

interface FilterQuestionsStore {
    orderBy: OrderByType
    difficulty: DifficultyType
    queryValue: string
    query: string
    page: number
    tag: string
    sortDirection: boolean
    hasMore: boolean

    setOrderBy: (value: OrderByType) => void
    setDifficulty: (value: DifficultyType) => void
    setQueryValue: (value: string) => void // query value is sent as a query param
    setQuery: (value: string) => void // this query controls input value
    setPage: (value: number) => void
    incrementPage: () => void
    decrementPage: () => void
    setTag: (value: string) => void
    toogleSortDirection: () => void
    setHasMore: (value: boolean) => void
}

export const useFilterQuestions = create<FilterQuestionsStore>((set) => ({
    orderBy: "",
    difficulty: "",
    queryValue: "",
    query: "",
    page: 1,
    tag: "",
    sortDirection: false,
    hasMore: true,

    setOrderBy: (value) => set(() => ({ orderBy: value })),
    setDifficulty: (value) => set(() => ({ difficulty: value })),
    setQueryValue: (value) => set(() => ({ queryValue: value })),
    setQuery: (value) => set(() => ({ query: value })),
    setPage: (value) => set(() => ({ page: value })),
    incrementPage: () => set((state) => ({ page: state.page + 1 })),
    decrementPage: () =>
        set((state) => ({ page: Math.max(1, state.page - 1) })),
    setTag: (value) => set(() => ({ tag: value })),
    toogleSortDirection: () =>
        set((state) => ({ sortDirection: !state.sortDirection })),
    setHasMore: (value) => set(() => ({ hasMore: value })),
}))
