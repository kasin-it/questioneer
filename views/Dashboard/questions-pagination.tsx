import { useFilterQuestions } from "@/hooks/use-filter-questions"
import { Button } from "@/components/ui/button"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

function QuestionsPagination() {
    const { page, hasMore, incrementPage, decrementPage } = useFilterQuestions()
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <Button
                        variant={"ghost"}
                        disabled={page < 2}
                        onClick={() => decrementPage()}
                    >
                        <PaginationPrevious href="#" />
                    </Button>
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink href="#">{page}</PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <Button
                        variant={"ghost"}
                        disabled={!hasMore}
                        onClick={() => incrementPage()}
                    >
                        <PaginationNext href="#" />
                    </Button>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
export default QuestionsPagination
