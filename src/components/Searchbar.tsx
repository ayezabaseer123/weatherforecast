import './Searchbar.css'

type SearchbarProps={
    value:string,
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
    placeholder:string
}

export const Searchbar=(props:SearchbarProps) =>{
    return(
        <input className="search" type="text" value={props.value} onChange={props.handleChange} placeholder={props.placeholder}/>
    )
}