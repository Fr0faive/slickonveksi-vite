import FormLayout from "../layout/FormLayout";

const registerPage = () => {
    return (
        <div className="bg-white dark:bg-gray-950 backdrop-blur-md">
            <FormLayout Children="Sign up for" labelText="username" submitText="Register"/>
        </div>
    )
}

export default registerPage;