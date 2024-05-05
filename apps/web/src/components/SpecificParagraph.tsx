import React from 'react'

interface ParagraphProps {
    spantext: string,
    text: string,
}
export default function SpecificParagraph({spantext, text}: ParagraphProps) {
  return (
    <div>
              <h3 className="flex text-2xl md:text-4xl font-bold text-fourth uppercase z-50">
                <span className="z-20 mr-2 after:content-[''] after:-z-10 after:block after:relative after:-top-2 md:after:-top-4 after:h-2 md:after:h-4 after:w-full after:bg-gradient-to-r after:from-thirdary after:to-secondary">
                  {spantext}
                </span>{" "}
                {text}
              </h3>
            </div>
  )
}
