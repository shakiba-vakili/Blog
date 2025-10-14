import Container from "@/app/components/Container"
import { IGetArticles } from "../page"

interface IArticleProps {
  params: Promise<{ id: string }>;
  searchParams:Promise<{}>;
}

async function Article(props: IArticleProps) {
    const {id} = await props.params;
    
    const result = await fetch(`http://localhost:3001/articles/${id}`)
    const data = (await result.json()) as IGetArticles

    return (
        <Container>
            <div className="p-4">
                <h2 className="text-2xl font-bold my-4">{data?.title}</h2>
                <p>{data?.description}</p>
            </div>
        </Container>
    )
}

export default Article
