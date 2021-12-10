import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { removeTokens } from "./components/AuthLayout";
import Header from "./components/Basic/Header";


const Home: NextPage = () => {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>Home</title>
				<meta name='description' content='App developed by Wajid2001 and Sahil' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<body className="font-body" style={{ backgroundColor: '#DAE0E6'}}>
			</body>
			<Header />

			{/* Post Box  */}
		
			<div className="relative flex items-center pt-10 pl-20">
				<div className="w-2/4 rounded-lg shadow-lg bg-white">	
					
					<div className="relative p-4 pl-20">
						<img src="https://placekitten.com/g/50/50" className="absolute top-0 left-0 ml-4 mt-4 rounded-full"/>
						<textarea className="text-elliapise bg-transparent w-full h-auto text-black text-3xl outline-none font-medium " placeholder="What's happening?" rows={5}></textarea>
					</div>
					<div className="pl-20 pb-4 pr-4 flex justify-between">
						<div className="flex text-2xl items-center">
							<div className="mr-2">🙂</div>
							<div className="mr-2">😝</div>
							<div className="mr-2">🤯</div>
							<div>🥰</div>
						</div>
						<div>
							<button className="bg-indigo-600 rounded-full text-blue-100 inline-block py-2 px-4">Submit</button>
						</div>
					</div>
				</div>
			</div>

			{/* Post View Box  */}
			<div className=" postbox flex pt-10 pl-20">
				<div className="relative w-2/4 h-auto gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
					<div className="relative flex gap-4">
						<img src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png" className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20" alt="" loading="lazy"/>
							<div className="flex flex-col w-full">
								<div className="flex flex-row justify-between">
									<p className="relative text-lg font-bold whitespace-nowrap truncate overflow-hidden">@userId</p>
									<a className="text-gray-500 text-xl" href="#"><i className="fa-solid fa-trash"></i></a>
								</div>
								<p className="text-black-400 text-sm">08 Dec 2021, at 08:00 PM</p>
							</div>
					</div>
					<p className="-mt-4 text-black-500 font-bold h-auto overflow-clip">Hi this is our application. <br/>we are working for lafe care.</p>
					
					<div className="flex space-x-6 items-center">
						<div className="flex space-x-2 items-center">
							<span>
                    			<button className="h-6 w-6 text-gray-600">
                        			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    				</svg>
									<span className="text-gray-700 font-semibold">20</span>
								</button>			
                			</span>
						</div>
						<div className="flex space-x-2 items-center pr-4">
							<span>
                        		<button className="h-6 w-6 text-red-600 hover:text-red-500" >
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            			<path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                        			</svg>
									<span className="text-gray-700 font-semibold">22</span>
								</button>	
                    		</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
