FROM denoland/deno

WORKDIR /app

RUN deno install --reload  --unstable --allow-read --allow-env --allow-net --allow-run -f -n tepi https://tepi.deno.dev/src/cli.ts

COPY . .

CMD ["tepi"]