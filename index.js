console.log("hello world")
console.log("on new-branch")

const newFeature = () => {
    let variant = "v1";

    return variant === "control" ? <div>Control</div> : <div>v1</div>;
}