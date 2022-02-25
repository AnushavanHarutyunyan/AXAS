import { Text } from '@consta/uikit/Text';
function TextBorderBottom(props) {
    const { data } = props;
    const { title } = data;
    return (
        <>
            <Text size="m" className="coefficients-heading">
                {title}
            </Text>
            <div className="middle-line"></div>
        </>
    );
}
export default TextBorderBottom;
