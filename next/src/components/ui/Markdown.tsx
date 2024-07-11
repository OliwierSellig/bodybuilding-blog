import { MDXRemote } from 'next-mdx-remote/rsc';

type MarkdownTypes = {
  Tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
  components?: Record<string, React.ReactNode>;
  children: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Markdown({ Tag, components, children, ...props }: MarkdownTypes) {
  const markdown = (
    <MDXRemote
      source={children}
      components={{
        ...(Tag && {
          p: ({ children }) => <Tag {...props}>{children}</Tag>,
        }),
        ...components,
      }}
      {...props}
    />
  );
  return Tag ? markdown : <div {...props}>{markdown}</div>;
}

Markdown.h1 = (props: MarkdownTypes) => <Markdown Tag='h1' {...props} />;
Markdown.h2 = (props: MarkdownTypes) => <Markdown Tag='h2' {...props} />;
Markdown.h3 = (props: MarkdownTypes) => <Markdown Tag='h3' {...props} />;
Markdown.h4 = (props: MarkdownTypes) => <Markdown Tag='h4' {...props} />;
Markdown.h5 = (props: MarkdownTypes) => <Markdown Tag='h5' {...props} />;
Markdown.h6 = (props: MarkdownTypes) => <Markdown Tag='h6' {...props} />;
Markdown.span = (props: MarkdownTypes) => <Markdown Tag='span' {...props} />;
Markdown.p = (props: MarkdownTypes) => <Markdown Tag='p' {...props} />;
