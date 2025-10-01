
function List() {
    const Names = ['Khizer', 'Ali', 'Ahmad']
    const NameList = Names.map(Name => <li>{Name}</li>);
    return(<ul className="list">{NameList}</ul>)
}

export default List;
