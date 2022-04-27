import React from "react";

const Contact = () => {
	return (
		<div
			id="contact"
			className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 "
		>
			<form
				method="POST"
				action="https://getform.io/f/c00b11c2-9337-410c-aff7-de3c285462df"
				className="flex flex-col  max-w-[600px] w-full"
			>
				<div className="pb-8 text-gray-300">
					<h1 className="text-4xl font-bold border-b-4 border-pink-600 inline ">
						Contact
					</h1>
					<p className="my-4">
						Submit the form below or shoot me an email - favourabangwu@gmail.com
					</p>
				</div>

				<input
					className="bg-[#ccd6f6] p-2"
					type="text"
					placeholder="Name"
					name="name"
				/>
				<input
					className="bg-[#ccd6f6] my-3 p-2"
					type="email"
					placeholder="Email"
					name="email"
				/>
				<textarea
					name="message"
					id=""
					placeholder="Message"
					className="p-2 bg-[#ccd6f6]"
					rows={10}
				></textarea>
				<button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3  my-8 mx-auto flex items-center">
					Let's collaborate
				</button>
			</form>
		</div>
	);
};

export default Contact;
