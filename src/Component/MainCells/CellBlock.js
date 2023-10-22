import CellBody from "./CellBody"

const CellBlock = ({data, className, reverse}) => {




  if(data.id === 2){
    return (
      <div className={`${className} border flex justify-center items-center bg-player1 text-xs`} style={{order : reverse}}>
          <CellBody data={data}/>
      </div>
    )
  } else if(data.id === 15){
    return (
      <div className={`${className} border flex justify-center items-center bg-player2 text-xs`} style={{order : reverse}}>
          <CellBody data={data}/>
      </div>
    )
  } else if(data.id === 28){
    return (
      <div className={`${className} border flex justify-center items-center bg-player3 text-xs`} style={{order : reverse}}>
          <CellBody data={data}/>
      </div>
    )
  } else if(data.id === 41){
    return (
      <div className={`${className} border flex justify-center items-center bg-player4 text-xs`} style={{order : reverse}}>
          <CellBody data={data}/>
      </div>
    )
  }else{
    return(
      <div className={`${className} border flex justify-center items-center text-xs`} style={{order : reverse}}>
          <CellBody data={data}/>
      </div>
    )
  }
}

export default CellBlock