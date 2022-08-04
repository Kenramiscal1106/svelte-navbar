<script lang="ts">
  import { onMount } from "svelte";
  let isSticky = false;
  onMount(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        isSticky = true;
        return;
      }
      isSticky = false;
    });
  });
</script>

<nav class:sticky={isSticky}>
  <ul>
    <li>
      <a href="#test">Home</a>
    </li>
    <li>
      <a href="#test">About</a>
    </li>
    <li>
      <a href="#test">Contact</a>
    </li>
  </ul>
</nav>

<style>
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
  ul > li {
    margin-right: 0.5rem;
  }
  nav {
    color: #fff;
    padding: 0.5rem;
    width: 100%;
    position: absolute;
    top: 0;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  }
  nav a {
    color: #333;
    text-decoration: none;
    padding: 0.5rem 1rem;
    display: block;
  }
  nav.sticky a {
    border-radius: 0.5rem;
    transition-property: color, background;
    transition-duration: 75ms;
    transition-timing-function: ease-in-out;
  }
  nav.sticky a:hover {
    background: #fff;
    color: #333;
  }
  nav.sticky {
    background: #fff;
    position: fixed;
    animation: slide-down 0.2s ease-out forwards;
  }
  @keyframes slide-down {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
</style>
