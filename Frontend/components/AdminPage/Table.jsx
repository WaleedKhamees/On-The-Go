import axios from "axios";
import { useState } from "react";

const Table = ({ data, apiUpdate, apiDelete, itemEditable }) => {
  const [items, setItems] = useState(data);

  console.log(items);



  const [itemBeingEdited, setItemBeingEdited] = useState({
    item_id: "",
    item_name: "",
    item_desc: "",
    item_price: "",
    img_url: "",
    discount_id: "",
    category: "",
  });

  const [itemInEditMode, setItemInEditMode] = useState({
    status: false,
    rowKey: -1
  });

  const handleItemEdit = (itemIndex, item) => {
    setItemInEditMode({ rowKey: itemIndex, status: true });
    setItemBeingEdited(item);
  }
  const updateItem = async () => {
    console.log(itemBeingEdited);
    await axios.patch(apiUpdate, itemBeingEdited);
    setItemBeingEdited({});
    setItemInEditMode({ rowKey: -1, status: false });
  }
  const deleteItem = async (item_id, itemIndex) => {
    console.log(apiDelete, item_id);
    await axios.delete(`${apiDelete}/${item_id}`);
    setItems(items.filter((item, i) => i !== itemIndex));
  }


  return (
    items &&
    <div className={` border rounded-lg overflow-clip`}>
      <table className="w-full text-left">
        <thead className="border-b ">
          <tr>
            {Object.keys(items[0]).map(key =>
              <th className="px-4 py-2 text-center " key={key}>{key.toUpperCase()}</th>
            )}
            <th className="px-4 py-2">Modify</th>
          </tr>
        </thead>
        <tbody>

          {items.map((item, itemIndex) =>
            <tr
              key={itemIndex}
              className={`${itemIndex !== itemInEditMode.rowKey ? "even:bg-[#4b4b4b] even:text-White odd:bg-[#d9d9d9] odd:text-body" : ""} `}>
              <>
                {/* Data  */}
                {
                  Object.values(item).map((value, i) =>
                    <td
                      key={`${value}-${i}`}
                      className="px-4 py-2 focus:outline-none text-center"
                      onInput={(e) => {
                        const tempItem = itemBeingEdited;
                        tempItem[Object.keys(tempItem)[i]] = e.target.textContent;
                        setItemBeingEdited({ ...tempItem });
                      }}
                      suppressContentEditableWarning
                      contentEditable={itemInEditMode.rowKey === itemIndex && itemEditable[Object.keys(item)[i]]}>
                      {value ?? "-"}
                    </td>
                  )}
                {/* edit delete  */}
                {
                  itemInEditMode.rowKey !== itemIndex
                  &&
                  <td className="px-4 py-2 cursor-pointer space-x-1">
                    <span className="material-symbols-outlined" onClick={() => {
                      handleItemEdit(itemIndex, item);
                    }}>
                      edit
                    </span>
                    <span className="material-symbols-outlined" onClick={() => deleteItem(item[Object.keys(item)[0]], itemIndex)}>
                      delete
                    </span>
                  </td>
                }
                {/* done */}
                {
                  itemInEditMode.rowKey === itemIndex
                  &&
                  <td className="px-4 py-2 cursor-pointer text-center" onClick={() => updateItem()}>
                    <span className="material-symbols-outlined">
                      done
                    </span>
                  </td>
                }
              </>

            </tr>)}
        </tbody>
      </table>
    </div>

  )
}
export default Table;