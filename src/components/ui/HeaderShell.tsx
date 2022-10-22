interface HeaderShellProps {
  className: string;
  children?: React.ReactNode;
}

const HeaderShell: React.FC<HeaderShellProps> = ({ className, children }) => {
  return <header className={className}>{children}</header>;
};

export default HeaderShell;
