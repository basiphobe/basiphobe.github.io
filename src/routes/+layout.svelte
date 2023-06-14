<script>
    import '../app.css'
    import Nav from "../components/nav.svelte";
</script>

<style>
    #content {
        text-align: center;
        padding: 0 200px;
        opacity: 0;
        animation: fade-in 5s forwards;
    }
    
    @keyframes fade-in {
      100% {
        opacity: 1;
        filter: blur(0);
      }
    }
</style>
    
<div id="contents">
    <Nav />
    <main class="masthead">
        <div id="content">
            <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div class="d-flex justify-content-center">
                    <div class="text-center">
                        <slot />
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>
