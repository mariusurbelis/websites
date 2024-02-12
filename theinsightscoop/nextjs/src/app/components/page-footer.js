"use client";
export default function PageFooter() {
    return (
        <div className="container my-5">
            © 2019-{new Date().getFullYear()}
            <a href="https://mariusurbelis.com">Marius Urbelis</a>
        </div>
    );
}
