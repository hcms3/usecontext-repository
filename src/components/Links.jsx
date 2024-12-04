export default function Links({route, title}){
    return <a href={route} style={{
        padding: "10px 10px",
        textDecoration: "none",
        borderRadius: "10px"
    }}>{title}</a>
}