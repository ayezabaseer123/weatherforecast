import './Fahrenheit.css'
type FahrenheitProps={
    value:number,
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
    blurEvent:()=>void
}
export const Fahrenheit = (props:FahrenheitProps) => {
  return (
    
    <>
  
      <input
      className="fahrenheit"
      value={props.value}
        type="number"
        placeholder="Fahrenheit"
        onBlur={ 
            props.blurEvent
           }
           onChange={props.handleChange} 
      />
    </>
  );
};
