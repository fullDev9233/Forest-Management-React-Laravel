@extends('layout.app')

@section('content')
    <div class="container">
        <div class="columns">
            <div class="column is-8 is-offset-2">
                <div class="box">
                    @markdown
                    <?php
                      use Illuminate\Support\Facades\Storage;
                      $contents = Storage::get('docs/aboutUs.md');
                       //$mdObject = (Markdown::parse($contents));
                     echo($contents)
                      ?>
                    @endmarkdown


                </div>
            </div>
        </div>
    </div>
@endsection
