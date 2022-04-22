
interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    props?: object
}


export const Button = ({ children, onClick, className, ...props }: ButtonProps) => {
    return (
        <button className={`${className} btn`} onClick={onClick} {...props}>
            {children}
        </button>
    );

}