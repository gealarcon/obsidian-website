import { React, CodeBlock, dracula } from '../../../../deps.ts';

const BasicsErrors = (props: any) => {

  return (
    <div className="docContainer">
      <h1>Errors</h1>
      <p>This chapter will cover the most common errors related to <code className="obsidianInline">obsidian</code> implementation.</p>
      <h2>ObsidianRouter</h2>
      <h3>Connection Refused</h3>
      <p>This error is likely to arise if you have not disabled the server-side cache and/or do not have an active redis instance at port 6379.  To learn more about redis and server-side caching, check out the <a href="#" onClick={() => props.setDocsPage('Server')}>Caching</a> section.</p>
      <h2>ObsidianWrapper</h2>
      <h3>Cannot read property obsidianSchema of undefined</h3>
      <p>This error is thrown when using <code className="obsidianInline">gather</code> without a properly sent <code className="obsidianInline">obsidianSchema</code>.  Make sure you're sending <code className="obsidianInline">obsidianSchema</code> via the window object, like so:</p>
      <CodeBlock
        language="tsx"
        showLineNumbers={true}
        style={dracula}
      >
        {`// server.tsx

// inside HTML head
<script>
  window.__INITIAL_STATE__ = \${JSON.stringify(initialState)};
</script>`}
      </CodeBlock>
      <br/>
      <p>Check out the chapter on server-side rendering to see an example.</p>
      <h3>Cannot convert undefined or null to object</h3>
      <p>This usually means something is up with your GraphQL server- <code className="obsidianInline">obsidian</code> has received null or undefined after querying the endpoint, and it can't normalize that result as it is not a proper GraphQL response.</p>
      <h3>Your app doesn't work after wrapping it with Obsidian</h3>
      <p>Check to make sure you've wrapped your app at the proper level.  You should be wrapping your app at the top-level component, but not in the server, as this will require wrapping the app in the hydrate method as well.  For example, if your top level component is App, App should be used in the <code className="obsidianInline">renderToString</code> method and in the <code className="obsidianInline">hydrate</code> methods, and ObsidianWrapper should be the first child of App.  Check out the chapter on server-side rendering to see an example.</p>
      <h4>Recap & Next Up</h4>
      <p>This section has walked through a simple implementation of <code className="obsidianInline">obsidian</code> with ObsidianRouter and ObsidianWrapper, and covered the most common use cases and errors.  Next, we're going to dive into caching and <code className="obsidianInline">obsidian</code>'s design philosophy and guiding development principles.  Once we have a firm grasp on how <code className="obsidianInline">obsidian</code> approaches GraphQL caching, we'll examine the specifics of server-side and client-side caching in <code className="obsidianInline">obsidian</code>.</p>
    </div>
  )
}

export default BasicsErrors;
