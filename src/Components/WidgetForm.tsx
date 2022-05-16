import { CloseButton } from "./CloseButton"
import bugImage from '../img/problema.svg'
import ideaImage from '../img/ideia.svg'
import thoughtImage from '../img/outro.svg'
import { useDebugValue } from "react"
const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImage,
            alt: "Imagem de um Inseto"
        }
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: ideaImage,
            alt: "Imagem de uma lampada"
        }
    },
    OTHER: {
        title: "Outro",
        image: {
            source: thoughtImage,
            alt: "Imagem de um balão de pensamento"
        }
    },
}

export function WidgetForm() {
    return (<>
        <div className='bg-zinc-900 p-4 relative rounded-2xl  mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
            <header>
                <span className="text-xl leading-6">Deixe seu Feedback</span><CloseButton />
            </header>

            <div className='flex py-8 gap-2 w-full'>
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            className='bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex  flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none'

                        >
                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    )
                })}
            </div>

            <footer className=" text-xs text-neutral-400">
                Todos os direitos reservados

            </footer>
        </div>
    </>)
}