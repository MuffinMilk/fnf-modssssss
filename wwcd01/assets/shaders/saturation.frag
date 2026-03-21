#pragma header

float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

vec3 deepfry(vec3 color) {
    // Increase saturation
    float saturation = 1.1;
    const vec3 luminance = vec3(0.2125, 0.7154, 0.0721);
    float intensity = dot(color, luminance);
    color = mix(vec3(intensity), color, saturation);

    // Increase contrast
    float contrast = 1.12;
    color = (color - 0.5) * contrast + 0.5;

    return color;
}

void main() {
    vec4 texColor = flixel_texture2D(bitmap, openfl_TextureCoordv);
    texColor.rgb = deepfry(texColor.rgb);
    gl_FragColor = texColor;
}
