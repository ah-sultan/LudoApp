import Head from 'next/head'

function Meta(props) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="descripton" content={props.descripton} />
        <meta name="keywords" content={props.keywords} />
        <title>{props.title}</title>
      </Head>
    </>
  )
}

Meta.defaultProps = {
  title: "Fashion",
  descripton: 'Fashion',
  keywords: 'Fashion',
}

export default Meta