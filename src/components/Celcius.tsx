import './Celcius.css'
type CeliusProps={
    value:number,
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
    blurEvent:()=>void
}
export const Celcius = (props:CeliusProps) => {
  return (
    
    <>

      <input
      className="celcius"
      value={props.value}
        type="number"
        placeholder="Celcius"
        onBlur={ 
         props.blurEvent
        }
        onChange={props.handleChange} 
      />
    </>
  );
};
