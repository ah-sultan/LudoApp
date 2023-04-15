
function Breadcrumb(props) {
  return (
    <section className="py-60px md:py-20 lg:pt-[110px] lg:pb-[117px] bg-primary-200 text-center">
        <div className="container">
            <h2 className="text-4xl md:text-5xl leading-1.2 text-tGreay-500 font-normal capitalize">{props.title}</h2>
            <ul className="flex justify-center mt-3.5">
                <li className="mr-[5px]">
                    <a className="text-lg leading-none text-tGreay-500 font-normal hover:text-primary-900 inline-block capitalize" href="/">{props.pages}</a>
                </li>
                <li className="before:content-['//'] before: text-tGreay-500 before:inline-block before:mr-2.5 ">
                    <a className="text-lg leading-none text-tGreay-500 font-normal hover:text-primary-900 inline-block capitalize" href="/">{props.title}</a>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Breadcrumb