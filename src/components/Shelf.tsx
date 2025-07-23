
import Card from './Card'

interface Props{
  page: number;
}
const Shelf = ({page}:Props) => {
  const renderShelf = () => {
    let start = (page - 1) * 5;
    let shelfRet = [];
    for(let i = start; i < page*5; i++)
    {
      shelfRet.push(i);
    }
    return shelfRet;
  };
  return (
    <div className="shelf">
      {renderShelf().map((i) => (
        <Card key={i} item={i}/>
      ))}
    </div>
  )
}

export default Shelf