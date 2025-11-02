class Camera{
    constructor(
        brand,
        model,
        year,
        format,
        lens,
        filmType
    )
    {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.format = format;
        this.lens = lens;
        this.filmType = filmType;
    }
    getCurrentYear() {
        let current_year = new Date().getFullYear();
        return current_year;
    }

    cameraAge(year) {
        let age = this.getCurrentYear() - year;
        return age
    }

    cameraHTML() {
    const cameraStory = `My camera is a ${this.brand} ${this.model} made in ${this.year} making it ${this.cameraAge(this.year)} years old. It's a ${this.format} camera with a ${this.lens} lens using ${this.filmType} film.`;
    return cameraStory;
    }
}

export default Camera;
