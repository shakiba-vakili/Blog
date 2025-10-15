import Container from "@/app/components/Container"
import { IGetArticles } from "../page"

interface IArticleProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{}>;
}

async function Article(props: IArticleProps) {
    const { id } = await props.params;
    
    const result = await fetch(`http://localhost:3001/articles/${id}`)
    const data = (await result.json()) as IGetArticles

    return (
        <Container>
            <div className="max-w-4xl mx-auto bg-gray-900 text-white p-8 rounded-xl shadow-2xl mt-12">
                <h2 className="text-3xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                    {data?.title}
                </h2>
                <p className="text-gray-200 text-lg leading-relaxed">
                    {data?.description}
                </p>
            </div>
        </Container>
    )
}

export default Article
