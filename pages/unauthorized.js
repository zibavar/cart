import Layout from "../components/layout";

function unauthorized (){
    return (
        <Layout title='Access is Denied'>
          <h2 className="text-xl">Access Denied</h2>
        </Layout>
    )
}
export default unauthorized