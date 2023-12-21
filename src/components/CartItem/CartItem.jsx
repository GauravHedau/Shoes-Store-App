import { MdDeleteSweep } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };

  return (
    <div className="p-4 border-b-2 last:border-none border-slate-700">
      <div className="flex justify-between py-3.5 px-2.5 gap-12 flex-col md:flex-row">
        <div className="md:w-[30%] w-full flex justify-center items-center">
          <img
            src={item.image}
            alt="Itemimages"
            className="w-[40%] md:w-[50%] lg:w-full"
          />
        </div>
        <div className="md:w-[70%] w-full flex flex-col gap-3">
          <h1 className="text-xl font-[600] text-slate-700">{item.name}</h1>
          <div className="flex gap-4 font-bold text-xl">
            <div
              className="w-6 h-6 rounded-full"
              style={{ backgroundColor: item.bg }}
            />
            <label htmlFor="size" className="text-[#ff6666] m-0">
              Size
            </label>
            <select name="size" id="size" className="text-[#ff6666]">
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="flex justify-between">
            <p className="font-bold text-[#16a34a] text-lg">${item.price}</p>
            <div
              onClick={removeFromCart}
              className="w-10 h-10 rounded-full bg-red-200 flex justify-center items-center
             hover:bg-red-400 group transition-all"
            >
              <MdDeleteSweep
                fontSize={25}
                className="group-hover:text-white text-red-800 transition-all cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
