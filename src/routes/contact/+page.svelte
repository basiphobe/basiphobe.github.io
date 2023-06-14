<!-- src/routes/contact.svelte -->
<div class="container my-5">
    <h1 class="text-center mb-4">Contact Us</h1>
    <form>
        <div class="mb-3">
            <label class="form-label">
                Name:
                <input class="form-control" type="text" placeholder="Enter your name" />
            </label>
        </div>
        <div class="mb-3">
            <label class="form-label">
                Email:
                <input class="form-control" type="email" placeholder="Enter your email" />
            </label>
        </div>
        <div class="mb-3">
            <label class="form-label">
                Message:
                <textarea class="form-control" rows="5" placeholder="Enter your message"></textarea>
            </label>
        </div>
        <button class="btn btn-primary" type="submit">Submit</button>
    </form>
</div>
