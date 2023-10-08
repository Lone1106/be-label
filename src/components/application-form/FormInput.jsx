const FormInput = ({ label, placeholder, type }) => {
	return (
		<div className="mb-2 w-full mx-auto">
			<label htmlFor={label} className="block mb-1">
				{label}
			</label>
			<input
				id={label}
				type={type}
				placeholder={placeholder}
				className="border-2 border-dark rounded-lg py-1 px-2 bg-light w-full focus:border-brand transition-colors"
			/>
		</div>
	);
};

export default FormInput;
