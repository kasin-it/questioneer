import Link from "next/link"
import { Question } from "@prisma/client"

interface RelatedQuestionProps {
    question: Question
}

function RelatedQuestion({ question }: RelatedQuestionProps) {
    return (
        <article className="rounded-md bg-gray-100 p-4" key={question.id}>
            <h3 className="mb-2 text-lg font-bold">{question.name}</h3>
            <p className="mb-4 text-gray-700">{question.desc}</p>
            <Link
                className="rounded-md bg-blue-500 px-3 py-2 text-white transition-colors hover:bg-blue-600"
                href={"/" + question.id}
            >
                View Question
            </Link>
        </article>
    )
}
export default RelatedQuestion
