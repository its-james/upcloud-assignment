

export const Input = (props) => {
  return (
    <>
      <style jsx>{`
        @import 'color';
        
        .input,
        .input:focus-visible {
          outline: none;
          border: unset;
          background-color: unset;
          border-bottom: 2px solid accent(mainAccentColor);
          margin: 1.5rem 0;
          padding: .25rem 0;
          width: 100%;
        }
      `}</style>
      <input {...props} className="input" />
    </>
  )
}