import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Form from "./Form";

const ToDoList = () => {
    return (
        <section className="todoapp">
            <Header/>
            <Form/>
            <Content/>
            <Footer/>
        </section>
    )
}

export default ToDoList