interface DocumentsLayoutProps {
  children: React.ReactNode;
}

const DocumentsLayout = ({ children }: DocumentsLayoutProps) => {
  return (
    <div>
      <div>DocumentsLayout</div>
      {children}
    </div>
  );
};

export default DocumentsLayout;
