import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

interface ITypeEffect {
  text: string | string[];
  staticText?: string | undefined;
  speed?: number | undefined;
  eraseDelay?: number | undefined;
  eraseSpeed?: number | undefined;
  typingDelay?: number | undefined;
  cursor?: string | undefined;
}

const TypingEffect: React.FC<ITypeEffect> = ({
  text,
  staticText,
  eraseSpeed,
  eraseDelay,
  typingDelay,
  speed,
  cursor,
}) => {
  return (
    <>
      <ReactTypingEffect
        staticText={staticText ? staticText : ''}
        eraseDelay={eraseDelay}
        eraseSpeed={eraseSpeed}
        typingDelay={typingDelay}
        speed={speed}
        text={text}
        cursor={cursor}
        // @ts-ignore
        cursorRenderer={(cursor: any) => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span key={key} style={{ fontWeight: 700 }}>
                    {char}
                  </span>
                );
              })}
            </h1>
          );
        }}
      />
    </>
  );
};

export default TypingEffect;
