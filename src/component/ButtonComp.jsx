import { Link } from "react-router-dom";

const ButtonComp = (props) => {
    const { children, bg_color } = props
    return (
        <button
                type="submit"
                className="flex h-11 items-center justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                // onSubmit={()=>}
              >
                {children}
              </button>
    )
}

export default ButtonComp;