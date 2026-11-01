interface Props { 
    pregunta : string; 
    respuesta: string; 
} 

export default function Pregunta({ pregunta, respuesta } : Props) {
    return (
        <article>
          <details>
            <summary className="rounded-md text-left inline text-slate-800 border p-2 border-blue-400 hover:border-blue-600 hover:bg-blue-300 hover:text-white">
              {pregunta}</summary>
            <p className="text-sm mt-6 text-blue-600 before:content-['_>_'] before:text-slate-400">{respuesta}</p>
          </details>
        </article>
    )
}