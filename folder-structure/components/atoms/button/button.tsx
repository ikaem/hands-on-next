import { PropsWithChildren } from 'react';
// import styles from './button.module.scss';

const Button: React.FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  // console.log(styles);

  return (
    <>
      {/* <button className={styles["button-default"]}>{children}</button>
      <button className={`${styles["button-danger"]}`}>{children}</button>
      <button className={`${styles["button-success"]}`}>{children}</button> */}

      <button>Hello Button</button>
      {/* <style jsx>
        {`
          .button {
            padding: 1rem;
            border-radius: 1rem;
            background: green;
            color: white;
          }
        `}
      </style>
      <style jsx global>
        {`
        
        a {
          color: red;
        }
      `}
      </style> */}
    </>
  );
};

export default Button;
