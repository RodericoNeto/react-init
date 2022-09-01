export default function Book(props) {
    console.log(props.title)
    return (
        <>
            <h3>{props.title}</h3>
        </>
    );
}