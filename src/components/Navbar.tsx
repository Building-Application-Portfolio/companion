


import Image from "next/image";



const navigation = [
  {
    name: "About",
    href: "https://github.com/a16z-infra/companion-app",
    current: false,
  },
];
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export  const Navbar  = async () => {


 {

  return (
    <div className="bg-gray-900 w-full fixed top-0 z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                className="block h-8 w-auto lg:hidden rounded-lg"
                src="https://avatars.githubusercontent.com/u/745163?s=200&v=4"
                alt="a16z"
              />
              <Image
                width={0}
                height={0}
                sizes="100vw"
                className="hidden h-8 w-auto lg:block rounded-lg"
                src="https://avatars.githubusercontent.com/u/745163?s=200&v=4"
                alt="a16z"
              />
            </div>
            <div className="ml-6">
              <div className="flex space-x-2 sm:space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
               
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}
}