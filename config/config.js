Reveal.initialize({

  dependencies: [
    { src: "plugin/markdown/marked.js" },
    { src: "plugin/markdown/markdown.js" },
    { src: "socket.io/socket.io.js", async: true },
    { src: "plugin/notes-server/client.js", async: true },
    {
      src: "plugin/highlight/highlight.js",
      async: true,
      callback: function() {
        hljs.initHighlightingOnLoad();
      }
    },
    {
      src: "plugin/external/external.js",
      condition: function() {
        return !!document.querySelector(
          "[data-external],[data-external-replace]"
        );
      }
    },

    { src: "plugin/notes-server/client.js", async: true }
  ]
});

Reveal.configure({ slideNumber: true });
Reveal.configure({ slideNumber: ".h/.v" });

Reveal.configure({
  slideNumber: function() {
    return [Reveal.getIndices().h, Reveal.getIndices().v];
  }
});

Reveal.configure({ showSlideNumber: "all" });
