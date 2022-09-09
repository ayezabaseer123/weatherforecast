import './TempConvertor.css'
type TempConvertorProps={
    value:number,
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
    blurEvent:()=>void
    placeholder:string
}
export const TempConvertor = ({value,handleChange,blurEvent,placeholder}:TempConvertorProps) => {
  return (
    
    <>

      <input
      className="celcius"
      value={value}
      type="number"
       
        onBlur={ 
         blurEvent
        }
        placeholder={placeholder}
        onChange={handleChange} 
      />
    </>
  );
};
