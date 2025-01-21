console.log("hello world")
console.log("on new-branch")

const newFeature = () => {
    let variant = "v1";

    const handleClick = () => {
        console.log("tracking button click");
    }

    return variant === "control" ? <div onclick={handleClick}>Control</div> : <div onclick={handleClick}>v1</div>;
}