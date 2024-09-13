<?php

namespace App\Services\API_PGD\Resources;

use App\Exceptions\ExportPgdException;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ModalidadeResource extends JsonResource
{
    public function get()
    {
        if ($this->nome == 'Presencial') {
            return 1;
        }

        if (str_contains(strtolower($this->nome), 'parcial')) {
            return 2; //  Teletrabalho parcial
        }

        if (str_contains($this->nome, 'Integral')) {
            return 3; // Teletrabalho integral
        }

        if (str_contains($this->nome, 'VIII')) {
            return 4; // Teletrabalho com residência no exterior (Dec.11.072/2022, art. 12, VIII)
        }

        if (str_contains($this->nome, '11.072/2022')) {
            return 5;  // Teletrabalho com residência no exterior (Dec.11.072/2022, art. 12, §7°
        }

        if (str_contains($this->nome, 'exterior')) {
            return 5;  // Teletrabalho com residência no exterior (Dec.11.072/2022, art. 12, §7°
        }

        throw new ExportPgdException('Modalidade inválida: '.$this->nome);
    }
}
